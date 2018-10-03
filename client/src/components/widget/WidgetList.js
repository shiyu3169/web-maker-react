import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetList extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page"
                    >
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <Link
                        className="navbar-brand"
                        to="/user/:uid/website/:wid/page/:pid/widget"
                    >
                        Widgets
                    </Link>
                    <Link
                        className="color-black"
                        to="/user/:uid/website/:wid/page/:pid/widget/new"
                    >
                        <i className="fas fa-plus" />
                    </Link>
                </nav>
                <div className="container-fluid">
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique saepe vel sit
                                repellendus quis
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <img
                                className="img-fluid"
                                src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                                alt="bird image"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempora, architecto
                                dignissimos. Voluptatibus placeat excepturi eum{" "}
                                <Link to="http://www.google.com">
                                    repellendus totam quam error atque
                                </Link>{" "}
                                asperiores, blanditiis sequi sit, reiciendis
                                quibusdam? In numquam expedita impedit.
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <h3> vel sit repellendus quis</h3>
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                width="1903"
                                height="769"
                                src="https://www.youtube.com/embed/SqrbIlUwR0U"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            />
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis nostrum maiores
                                blanditiis iste doloribus harum magni ullam
                                repellat eaque? Et veniam accusantium illo
                                nostrum dolores temporibus. Cum cupiditate alias
                                eius.
                            </h5>
                        </div>
                    </div>
                </div>
                <footer className="navbar navbar-light fixed-bottom bg-light">
                    <div className="full-width">
                        <Link
                            className="color-black float-right"
                            to="../User/Profile.html"
                        >
                            <i className="fas fa-user" />
                        </Link>
                    </div>
                </footer>
            </div>
        );
    }
}
