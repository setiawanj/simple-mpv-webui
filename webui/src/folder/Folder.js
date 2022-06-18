import { useEffect, useState } from 'react';

const Folder = (props) => {
	const [subdirectories, setSubdirectories] = useState([]);

	useEffect(() => {
		if (!props.subdirectories) {
			return
		}

		let temp = [];

		Object.keys(props.subdirectories).forEach(key => {
			temp.push(
				<li className="has-children" key={key}>
					<div className="directory-name">{key}</div>
					<Folder subdirectories={props.subdirectories[key]}/>
				</li>
			);
		});

		setSubdirectories(temp)
	}, [props.subdirectories]);



	return (
		<ul>
			{subdirectories}
		</ul>
	)
}

export default Folder;