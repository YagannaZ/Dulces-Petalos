import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <React.Fragment>
            <div className="migas" style={{width:'20vw'}}>
                <div className="ms-5">
                {breadcrumbs.map(({ breadcrumb }, index) => (
                    <React.Fragment >
                            {index > 0 && " > "}
                            <a href="/" style={{textDecoration:'none',color:'black'}} className="h5">
                                {breadcrumb}
                            </a>
                    </React.Fragment>
                ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Breadcrumbs