import FolderCategory from './FolderCategory';
import SearchBar from './SearchBar';
import Folder from './Folder';

const FolderBrowser = () => {
	return (
		<div>
			<div>FolderBrowser</div>
			<FolderCategory />
			<SearchBar />
			<Folder />
		</div>
	)
}

export default FolderBrowser;