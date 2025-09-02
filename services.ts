import { ConvexReactClient } from "convex/react";
import { api } from "../convex/_generated/api";

/**
 * Handles the entire file upload process to Convex storage.
 *
 * This function encapsulates the three-step process for uploading a file:
 * 1. Generate a temporary upload URL from the backend.
 * 2. Upload the file to that URL.
 * 3. Receive the storageId for the uploaded file.
 *
 * @param {File} file - The file object to upload (e.g., from an <input type="file">).
 * @param {ConvexReactClient} convex - An instance of the Convex client.
 * @returns {Promise<string>} The storageId of the uploaded file.
 * @throws {Error} If any step of the upload process fails.
 */
export async function handleUpload(file: File, convex: ConvexReactClient): Promise<string> {

  // Step 1: Get a short-lived upload URL
  console.log("Requesting an upload URL...");
  const postUrl = await convex.mutation(api.api.upload.generateUploadUrl);

  // Step 2: POST the file to the URL
  console.log("Uploading file...");
  const result = await fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": file.type },
    body: file,
  });

  if (!result.ok) {
    throw new Error(`Upload failed: ${await result.text()}`);
  }

  const { storageId } = await result.json();
  console.log("File uploaded successfully! Storage ID:", storageId);

  // Step 3: Return the new storageId
  // The calling component is now responsible for saving this storageId to the database
  // by passing it to the appropriate create/update mutation.
  return storageId;
}

/*
 * --- EXAMPLE USAGE IN A REACT COMPONENT ---
 *
 * import { useMutation, useConvex } from "convex/react";
 * import { api } from "../../convex/_generated/api";
 * import { handleUpload } from "./services"; // Adjust path as needed
 * import { useState } from "react";
 *
 * const MyComponent = () => {
 *   const convex = useConvex();
 *   const createSite = useMutation(api.api.touristicSites.createTouristicSite);
 *   const [selectedFile, setSelectedFile] = useState<File | null>(null);
 *
 *   const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 *     if (event.target.files) {
 *       setSelectedFile(event.target.files[0]);
 *     }
 *   };
 *
 *   const onFormSubmit = async (event: React.FormEvent) => {
 *     event.preventDefault();
 *     if (!selectedFile) {
 *       alert("Please select a file first.");
 *       return;
 *     }
 *
 *     try {
 *       // 1. Upload the file and get the storageId
 *       const imageId = await handleUpload(selectedFile, convex);
 *
 *       // 2. Save the storageId to the database
 *       await createSite({
 *         name: "My Awesome Site",
 *         description: "A great place to visit.",
 *         images: [imageId], // Pass the ID here
 *         // ... other form fields
 *       });
 *
 *       alert("Site created successfully!");
 *     } catch (error) {
 *       console.error(error);
 *       alert("Error creating site.");
 *     }
 *   };
 *
 *   return (
 *     <form onSubmit={onFormSubmit}>
 *       <input type="file" onChange={onFileChange} />
 *       <button type="submit">Create Site</button>
 *     </form>
 *   );
 * };
 */
