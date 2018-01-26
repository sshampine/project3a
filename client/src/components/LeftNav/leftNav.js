import React, { Component } from "react";
import "./leftNav.css";
import { Row, Container } from "../../components/Grid";


const LeftNav = () => 
  <div>
	<nav className="navbar navbar-default navbar-fixed-left">
		<div className="navbar-header">
			<div className="navbar-collapse collapse">
				<ul className="nav navbar-nav">
					<li>Home</li>
					<li>Profile</li>
					<li> 
						<ul className="navbar-nav">
							<li>ETHBTC</li>
							<li>BNTETH</li>
							<li>BCCBTC</li>
							<li>OAXETH</li>
						</ul>
					</li>
				</ul>
			</div>	
		</div>
	</nav>
 </div>	

export default LeftNav;