import React from 'react';

class WriteUs extends React.Component {
    render () {
        return (
            <div>
                <section className="write-us">
                    <div className="wrapper">
                        <h2>Write to Us</h2>
                        <form action="">
                            <div className="flex-wrapper">
                                <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                        <input type="phone" placeholder="Phone"/>
                                            <select>
                                                <option value="" hidden disabled selected>Services</option>
                                                <option>business consultation</option>
                                                <option>boost local business</option>
                                                <option>accounting</option>
                                            </select>
                            </div>
                            <textarea placeholder="Comment"></textarea>
                            <button type="button" className="btn-middle">Submit now</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default WriteUs;