import React from 'react'

export default function DashChild() {
    // Here we can use props and make component reusable  but it take lot of time for me
    return (
        <div>

            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>
                            <p>New order</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer">Learn More <i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
