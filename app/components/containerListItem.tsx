import * as React from 'react'
import * as classNames from 'classnames'

export interface Container {
	id: string
	name: string
	image: string
	state: string
	status: string
}

export class ContainerListItem extends React.Component<Container, {}> {

	// Helper method to determine whether container is running or not
	isRunning() {
		return this.props.state === 'running'
	}

	render() {
		const panelClass = this.isRunning() ? 'success' : 'default'
		const classes = classNames('panel', `panel-${panelClass}`)
		const buttonText = this.isRunning() ? 'Stop' : 'Start'

		return(
			<div classNames="col-sm-3">
				<div classNames= { classes }>
					<div classNames="panel-heading">{ this.props.name }</div>
					<div classNames="panel-body">
						Status: {this.props.status}<br/>
						Image: {this.props.image}
					</div>
					<div classNames="panel-footer">
						<button classNames="btn btn-default">{buttonText}</button>
					</div>
					</div>
					</div>
			)
	}
}
