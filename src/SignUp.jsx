import React from 'react'
import './App.css'
const SignUp = () => {
    return (
        <div className='sign-up'>
            <div className="sign-up-heading">
                <p>March 17, 2021 12:00</p>
                <h2>
                    The help of Augmented Reality and Holograms.
                </h2>
                <p>Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material.
                    In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immersive learning experience</p>
            </div>
            <div className="sign-up-fields">
                <h2>Join the event</h2>
                <form>
                    <div className="row">
                        <label htmlFor="first">
                            First Name
                            <input type="text" name="" id="first" placeholder='Enter your First Name' />
                        </label>
                        <label htmlFor="last">
                            Last Name
                            <input type="text" name="" id="last" placeholder='Enter your Last Name' />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="email">
                            Business email
                            <input type="text" name="" id="email" placeholder='Enter your Email' />
                        </label>
                        <label htmlFor="">
                            Title
                            <input type="text" name="" id="" placeholder='What is your job title?' />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="">
                            Company name
                            <input type="text" name="" id="" placeholder='Where do you work?' />
                        </label>
                        <label htmlFor="">
                            Where do you work?
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </label>
                    </div>

                    <label htmlFor="">
                        What are you hoping to learn about?
                        <textarea name="" id="" cols="30" rows="5" placeholder='Where do you work?'></textarea>
                    </label>
                    <label htmlFor="" className='checkbox'>
                        <input type="checkbox" name="" id="" />
                        I would like to receive emails about future webinars
                    </label>
                    <button type='submit'>
                        Register for this event
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
