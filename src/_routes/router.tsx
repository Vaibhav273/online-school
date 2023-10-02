import React from "react";
import { createHashRouter } from 'react-router-dom'; //, createBrowserRouter
import Layout from "../_layout";
import Error from "../global/_error";
import Subjects from "../pages/subjects";
import Courses from "../pages/courses";
import SchoolClass from "../pages/school-class";

const Home = React.lazy(() => import('../pages/_home'));

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "courses", element: <Courses /> },
            { path: "about-us" },
            { path: "faq" },
            { path: "contact-us" },
            { path: "subjects", element: <Subjects /> },
            { path: "classes/:className", element: <SchoolClass /> },
            { path: "classes/:className/:subjectName", element: <Subjects /> }
            // { path: "classes/:className/:subject/:", element: <Subjects /> }
        ]
    }
]);

export default router;