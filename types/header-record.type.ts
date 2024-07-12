interface ExploreRecordType {
  id: string;
  name: string;
  imageUrl: string;
  element: () => React.JSX.Element;
  code: string;
  installationCommands: Array<string>;
}

export default ExploreRecordType;
