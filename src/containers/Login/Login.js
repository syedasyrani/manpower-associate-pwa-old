import React from 'react'

import styles from './Login.css'

const login = () => (
    <div className={styles['Login'] + " container"}>
        <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className={styles["card-signin"] + " card my-5"}>
                <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className={styles['form-signin']}>
                        <div className={styles['form-label-group']}>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus={true} />
                            <label htmlFor="inputEmail">Email address</label>
                        </div>

                        <div className={styles['form-label-group']}>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <div className={styles['custom-control'] + " " + styles['custom-checkbox'] + " mb-3"}>
                            <input type="checkbox" className={styles['custom-control-input']} id="customCheck1" />
                            <label className={styles['custom-control-label']} htmlFor="customCheck1">Remember password</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
)

export default login