import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import Image from "../layout/Image";

export default class WidgetList extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "HEADING" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <Heading text="Welcome" size="1" />
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "HEADING" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <Heading
                            text="Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique saepe vel sit
                                repellendus quis"
                            size="3"
                        />
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "IMAGE" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <Image
                            src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                            alt="bird"
                            width="50%"
                        />
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "HEADING" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <Heading text="vel sit repellendus quis" size="3" />
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "YOUTUBE" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title="youtube"
                                width="1903"
                                height="769"
                                src="https://www.youtube.com/embed/SqrbIlUwR0U"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div>
                        <div className="absolute-right">
                            <Link
                                to={{
                                    pathname:
                                        "/user/:uid/website/:wid/page/:pid/widget/:wgid",
                                    state: { type: "HEADING" }
                                }}
                            >
                                <i className="fas fa-cog" />
                            </Link>
                            <Link to="#">
                                <i className="fas fa-bars" />
                            </Link>
                        </div>
                        <div>
                            <Heading
                                text="Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis nostrum maiores
                                blanditiis iste doloribus harum magni ullam
                                repellat eaque? Et veniam accusantium illo
                                nostrum dolores temporibus. Cum cupiditate alias
                                eius."
                                size="5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
