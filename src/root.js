import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Markdown from 'react-markdown2';

export default class Root extends Component {
	render() {
		return (
			<Grid className="app">
				<Row>
					<Col md={12}>
						<Markdown source="*text*"/>
					</Col>
				</Row>
			</Grid>
		);
	}
}
