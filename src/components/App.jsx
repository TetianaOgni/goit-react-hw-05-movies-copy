import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { MagnifyingGlass } from 'react-loader-spinner';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <Suspense
      fallback={
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{
            borderRadius: '50%',
            boxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            WebkitBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
            MozBoxShadow: '0px 0px 16px 6px rgba(0, 101, 255, 0.69) inset',
          }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#fff"
          color="rgb(46,46,46)"
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
