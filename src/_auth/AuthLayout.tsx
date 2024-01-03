import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) :
                (
                    <>
                        <section>
                            <Outlet />
                        </section>

                        <img
                            src="../assets/img/cards.jpg"
                            alt="cards game"
                        />
                    </>
                )
            }
        </>
    )
}

export default AuthLayout
