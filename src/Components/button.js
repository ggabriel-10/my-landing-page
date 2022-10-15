export default function Button(props) {
    const openInNewTab = url => {     
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <div>
        <button onClick={() => openInNewTab(props.link)}>
          {props.label}
        </button>
      </div>
    );
  }