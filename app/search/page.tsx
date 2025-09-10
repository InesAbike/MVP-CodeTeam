import { Suspense } from 'react';
import { Header } from '../components/search/Header';
import { Main } from '../components/search/Main';

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Main />
      </div>
    </Suspense>
  );
};

export default SearchPage;