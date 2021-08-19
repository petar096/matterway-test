import React from 'react';
import {Spinner} from "reactstrap";


const Loader = ({text}) => (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <h3>{text} </h3>
                <div className="ml-4">
                    <Spinner
                        style={{ width: "0.7rem", height: "0.7rem" }}
                        type="grow"
                        className="ml-3"
                    />
                    <Spinner
                        style={{ width: "0.7rem", height: "0.7rem" }}
                        type="grow"
                        className="mx-2"
                     />
                    <Spinner
                        style={{ width: "0.7rem", height: "0.7rem" }}
                        type="grow"
                    />
                </div>
            </div>
        </div>
    )

export default Loader;
