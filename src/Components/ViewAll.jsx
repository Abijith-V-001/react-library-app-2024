import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    return (
        <div><br />
<NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published year</th>
                                    <th scope="col">Price(Rs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Alchemist</th>
                                    <td>Paulo Coelho</td>
                                    <td>2000</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th scope="row">The Post Office</th>
                                    <td>JaRabindra Nath Tagore</td>
                                    <td>1935</td>
                                    <td>250</td>
                                </tr>
                                <tr>
                                    <th scope="row">Malgudi day</th>
                                    <td>R K Narayan</td>
                                    <td>1987</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th scope="row">The private life of an indian prince		</th>
                                    <td>Mulk Raj Anand
                                    </td>
                                    <td>1977</td>
                                    <td>310</td>
                                </tr>
                                <tr>
                                    <th scope="row">Untouchable		</th>
                                    <td>Mulk Raj Anand
                                    </td>
                                    <td>1958</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th scope="row"> Romeo and Juliet

                                    </th>
                                    <td>William Shakespeare

                                    </td>
                                    <td>1587</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th scope="row">The world as I see it

                                    </th>
                                    <td >Albert Einstein

                                    </td>
                                    <td>1787</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th scope="row">Origin of Species

                                    </th>
                                    <td>Charles Darwin

                                    </td>
                                    <td>1587</td>
                                    <td>450</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll