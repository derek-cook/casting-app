import React, {Component} from 'react';


class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="http://derek-cook.github.io">Derek Cook</a>
                    </p>
                </div>
            </footer>
		);
	}
}

export default Footer;
