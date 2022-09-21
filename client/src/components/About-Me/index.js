import React from "react";
import avatar from '../../assets/images/avatar.png'

function About() {
    return (
        <div className="container about">
            <div className="row about-me">
                <h2 className="col-12">About Me</h2>
                <div className="info">
                    <img src={avatar} alt="Alex's Avatar" className="avatar" />
                    <div className="col-12">
                        <p>Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
                            pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
                            sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
                            ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
                            turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
                            faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
                            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                            facilisis luctus, metus
                        </p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                            libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
                            pharetra. Praesent dapibus, neque id cursus
                            faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
                            Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                            facilisis luctus, metus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;