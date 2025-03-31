import { NavLink, useRouteError } from "react-router-dom"


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)

  return (
    <div>
        <h1>OOPS!! An Error Occured.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to={"/"}>
            <button>Go To Home Page</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage