function Comments() {
  return (
    <div
      ref={element => {
        if (element === null) return;

        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', 'https://utteranc.es/client.js');
        scriptElement.setAttribute('repo', 'mass2527/philly.im');
        scriptElement.setAttribute('issue-term', 'url');
        scriptElement.setAttribute('async', 'true');
        scriptElement.setAttribute('crossorigin', 'anonymous');
        scriptElement.setAttribute('theme', 'icy-dark');

        if (element) {
          element.appendChild(scriptElement);
        }
      }}
    />
  );
}

export default Comments;
