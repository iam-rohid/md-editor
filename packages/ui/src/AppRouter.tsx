import {
  Router,
  ReactLocation,
  createMemoryHistory,
  Route,
  DefaultGenerics,
  Navigate,
} from "@tanstack/react-location";
import AppLayout from "./AppLayout";
import DraftsScreen from "./screens/DraftsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MindMapScreen from "./screens/MindMapScreen";
import RecentScreen from "./screens/RecentScreen";
import TrashScreen from "./screens/TrashScreen";

const routes: Route<DefaultGenerics>[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/drafts" replace />,
      },
      {
        path: "recent",
        element: <RecentScreen />,
      },
      {
        path: "drafts",
        element: <DraftsScreen />,
      },
      {
        path: "favorites",
        element: <FavoritesScreen />,
      },
      {
        path: "map",
        element: <MindMapScreen />,
      },
      {
        path: "trash",
        element: <TrashScreen />,
      },
    ],
  },
];
const hiistory = createMemoryHistory();
const location = new ReactLocation({
  history: hiistory,
});

const AppRouter = () => {
  return <Router routes={routes} location={location} />;
};

export default AppRouter;
