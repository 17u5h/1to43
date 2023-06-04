const focusGroup = (ref) => {
	ref.current?.scrollIntoView({block: "start", inline: "center"})
}

export default focusGroup