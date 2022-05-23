import React from 'react';
import './Board.css';
import Bar from './bar';




// PRIORITIES
const PRIORITY_HIGHEST = "HIGHEST";
const PRIORITY_HIGH = "HIGH";
const PRIORITY_MEDIUM = "MEDIUM";
const PRIORITY_LOW = "LOW";
const PRIORITY_TRIVIAL = "TRIVIAL";
// STATUS
const TYPE_TODO = "TODO";
const TYPE_INPROGRESS = "INPROGRESS";
const TYPE_REVIEW = "Review";
const TYPE_DONE = "DONE";
// TITLES
const TITLE_TODO = "To do";
const TITLE_INPROGRESS = "In Progress";
const TITLE_REVIEW = "Review";
const TITLE_DONE = "Done";

// TASK
const CLASS_TASK = "taskCard";
const CLASS_COLUMN = "boardColumn";

// GENERAL JSON
const data = {
	tasks: [
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGHEST,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_TODO,
			points: 3
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGHEST,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_TODO,
			points: 3
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGHEST,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_TODO
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGHEST,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_TODO
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGH,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_INPROGRESS
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_HIGH,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_INPROGRESS
		},
		{
			id:"Due in 4 days",
			priority: PRIORITY_HIGH,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_INPROGRESS
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_MEDIUM,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_REVIEW
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_MEDIUM,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_REVIEW
		},
		{
			id: "Due in 4 days",
			priority: PRIORITY_MEDIUM,
			title: "complete user research for new website",
			epicLink: "High Priority",
			status: TYPE_REVIEW
		},
		{
			id: "Submited",
			priority: PRIORITY_LOW,
			title:"complete user research for new website",
			epicLink: "Completed",
			status: TYPE_DONE
		},
	]
};

const TaskCard = (task) => {
	const priorityclass = getPriorityClass(task.priority);

	function getPriorityClass(priority) {
		if (priority === PRIORITY_LOW) {
			return CLASS_TASK + "--" + PRIORITY_LOW;
		} else if (priority === PRIORITY_MEDIUM) {
			return CLASS_TASK + "--" + PRIORITY_MEDIUM;
		} else if (priority === PRIORITY_HIGH) {
			return CLASS_TASK + "--" + PRIORITY_HIGH;
		} else if (priority === PRIORITY_HIGHEST) {
			return CLASS_TASK + "--" + PRIORITY_HIGHEST;
		}
	}

	return (
		<div className={`taskCard ${priorityclass}`}>
			<header className="taskCard__header">
				<ul><li style={{marginLeft:"0px"}}>Design</li></ul>
				<h4 classNaDesignme="taskCard__title">{task.title}</h4>
				
			</header>

			<footer className="taskCard__footer">
            <div className="taskCard__epicLink-wrapper">
					<span className="taskCard__epicLink-title">{task.epicLink}</span>
				</div>
				<div>
					<span className="taskCard__id"><ul><li>{task.id}</li></ul></span>
				</div>
			</footer>
		</div>
	);
};

const BoardColumn = (props) => {
	const columnClass = getColumnClass(props.title);
	function getColumnClass(title) {
		if (title === TITLE_TODO) {
			return CLASS_COLUMN + "--" + TYPE_TODO;
		} else if (title === TITLE_INPROGRESS) {
			return CLASS_COLUMN + "--" + TYPE_INPROGRESS;
		} else if (title === TITLE_DONE) {
			return CLASS_COLUMN + "--" + TYPE_DONE;
		}
	}

	return (
		
		<div className={`boardColumn ${columnClass}`}>
			<header className="boardColumn__header">		
				<h1 className="boardColumn__title">{props.title}</h1>
			</header>
			<div className="boardColumn__taskList">
				{props.tasks.map((task) => (
					<TaskCard {...task} />
				))}
			</div>
		</div>
	);
};

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: data.tasks
		};
	}

	render() {
		return (
			
		   
			<div className="board">
			     <div className='div1'><Bar className="navbar"/></div>
				<div className='row'><BoardColumn class="col"					
					title={TITLE_TODO}
					tasks={this.state.tasks.filter((task) => {
						return task.status === TYPE_TODO;
					})}
				/>

				<BoardColumn class="col"	
					title={TITLE_INPROGRESS}
					tasks={this.state.tasks.filter((task) => {
						return task.status === TYPE_INPROGRESS;
					})}
				/>

				<BoardColumn class="col"	
					title={TITLE_REVIEW}
					tasks={this.state.tasks.filter((task) => {
						return task.status === TYPE_REVIEW;
					})}
				/>
				<BoardColumn class="col"	
					title={TITLE_DONE}
					tasks={this.state.tasks.filter((task) => {
						return task.status === TYPE_DONE;
					})}
				/>
				</div>
				</div>
				
			
		
		);
	}
}

export default Board;