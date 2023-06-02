const focusGroup = (ref) => {
	ref.current?.scrollIntoView({block: "start", inline: "nearest"})
}

export default focusGroup