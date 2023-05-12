const focusGroup = (ref) => {
	ref.current?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
}

export default focusGroup