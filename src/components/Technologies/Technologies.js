import React from 'react';

const Technologies = () => {
    return (
        <div className="m-5">
            <h1 className="text-center m-5 text-primary">Our special equipments</h1>
            <div className="row row-cols-1 row-cols-md-2 g-5">
                <div class="col text-center">
                    <img src="https://www.uhlbd.com/backend/web/uploads/medium/1451282150500%20Slice%20CT%20Scan.jpg" class="rounded" alt="..." />
                    <h3 className="text-primary">MRI</h3>
                </div>
                <div class="col text-center">
                    <img src="https://www.uhlbd.com/backend/web/uploads/medium/1451282151Integrated%20Brachytherapy%20unit.jpg" alt="..." />
                    <h3 className="text-primary">X-Ray</h3>
                </div>
                <div class="col text-center">
                    <img src="https://www.uhlbd.com/backend/web/uploads/medium/1451282151PET-CT%20Scan%20.jpg" alt="..." />
                    <h3 className="text-primary">Ultrasnogram</h3>
                </div>
                <div class="col text-center">
                    <img src="https://www.uhlbd.com/backend/web/uploads/medium/1451282154Cath%20Lab.jpg" alt="..." />
                    <h3 className="text-primary">Ct-Scan</h3>
                </div>
                <div class="col text-center">
                    <img src="https://www.uhlbd.com/backend/web/uploads/medium/1451282155DSC_0227.jpg" alt="..." />
                    <h3 className="text-primary">ECG</h3>
                </div>
            </div>
        </div>
    );
};

export default Technologies;