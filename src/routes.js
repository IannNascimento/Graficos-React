import Charts from "views/Charts/Charts.jsx";
import Timeline from "@material-ui/icons/Timeline";

var dashRoutes = [
  {
    path: "/charts",
    name: "Charts",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  },
 ];
export default dashRoutes;
