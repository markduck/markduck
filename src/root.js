import React, { Component } from 'react';
// import Sidebar from 'react-sidebar';
import { Grid, Row, Col } from 'react-bootstrap';
import Markdown from 'react-markdown2';
import Ace from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/github';

export default class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// TODO load last from local storage
			content: '',
		};
	}

	render() {
		const onChange = value => {
			this.setState({ content: value });
		};
		const aceProps = {
			mode: 'markdown',
			theme: 'github',
			value: this.state.content,
			onChange,
		};
		return (
			<Grid className="app">
				<Row>
					<Col md={6}>
						<Ace {...aceProps}/>
					</Col>
					<Col md={6}>
						<Markdown source={this.state.content}/>
					</Col>
				</Row>
			</Grid>
		);
	}
}
