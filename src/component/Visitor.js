import React from 'react'
// Here we can use props and make component reusable  but it take lot of time for me
function Visitor() {
    return (
        <div>
            <section className="col-lg-5 connectedSortable">
                <div className="card bg-gradient-primary">
                    <div className="card-header border-0">
                        <h3 className="card-title">
                            <i className="fas fa-map-marker-alt mr-1" />
                            Visitors
                        </h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                <i className="far fa-calendar-alt" />
                            </button>
                            <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div id="world-map" style={{ height: 250, width: '100%' }} />
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="row">
                            <div className="col-4 text-center">
                                <div id="sparkline-1" />
                                <div className="text-white">Visitors</div>
                            </div>
                            <div className="col-4 text-center">
                                <div id="sparkline-2" />
                                <div className="text-white">Online</div>
                            </div>
                            <div className="col-4 text-center">
                                <div id="sparkline-3" />
                                <div className="text-white">Sales</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="card bg-gradient-info">
                    <div className="card-header border-0">
                        <h3 className="card-title">
                            <i className="fas fa-th mr-1" />
                            Sales Graph
                        </h3>
                        <div className="card-tools">
                            <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <canvas className="chart" id="line-chart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} />
                    </div>
                    <div className="card-footer bg-transparent">
                        <div className="row">
                            <div className="col-4 text-center">
                                <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="text-white">Mail-Orders</div>
                            </div>
                            <div className="col-4 text-center">
                                <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="text-white">Online</div>
                            </div>
                            <div className="col-4 text-center">
                                <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                                <div className="text-white">In-Store</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-gradient-success">
                    <div className="card-header border-0">
                        <h3 className="card-title">
                            <i className="far fa-calendar-alt" />
                            Calendar
                        </h3>
                        <div className="card-tools">
                            <div className="btn-group">
                                <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
                                    <i className="fas fa-bars" />
                                </button>
                                <div className="dropdown-menu" role="menu">
                                    <a href="#" className="dropdown-item">Add new event</a>
                                    <a href="#" className="dropdown-item">Clear events</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">View calendar</a>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                                <i className="fas fa-minus" />
                            </button>
                            <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    </div>
                    <div className="card-body pt-0">
                        <div id="calendar" style={{ width: '100%' }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Visitor