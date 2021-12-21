import { Children } from "react";

const routes =[
    {
        path: 'app',
        element: <Home />,
        Children: [
            {
              path: 'account', element: <Account />
            }
        ]
    }
]