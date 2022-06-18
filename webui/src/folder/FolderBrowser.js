import FolderCategory from './FolderCategory';
import SearchBar from './SearchBar';
import Folder from './Folder';
import { APIPath } from 'APIPath';
import { useState, useEffect } from 'react';

const FolderBrowser = () => {

	const [directories, setDirectories] = useState();

	useEffect(() => {
		fetch(APIPath + '/api/directory_structure')
		  .then(response => response.json())
		  .then(data => setDirectories(data));
	}, []);

	return (
		<div>
			FolderBrowser
			<FolderCategory />
			<SearchBar />
			<Folder subdirectories={directories}/>
		</div>
	)
}

export default FolderBrowser;