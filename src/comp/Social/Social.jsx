const Social = () => {
    return (
        <div>
            <h1 className=" text-5xl text-center">Upcoming Events</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Tour de France</td>
                            <td>July 1-23, 2024</td>
                            <td>France</td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Boston Marathon</td>
                            <td>April 15, 2024</td>
                            <td>Boston, MA, USA</td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Ironman World Championship</td>
                            <td>October 12, 2024</td>
                            <td>Kailua-Kona, HI, USA</td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Giro d'Italia</td>
                            <td>May 4-26, 2024</td>
                            <td>Italy</td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>New York City Marathon</td>
                            <td>November 3, 2024</td>
                            <td>New York, NY, USA
                            </td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Rad Race</td>
                            <td>November 3, 2024</td>
                            <td>Germany
                            </td>
                            <th><button className="btn btn-ghost">Register</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Social;