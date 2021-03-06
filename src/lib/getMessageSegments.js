
export default getMessageSegments = (messageWords,urls) => {
	let messageSegments = []
	let segmentIndex = 0
	messageSegments[segmentIndex] = ""
	for(let i=0;i<messageWords.length;i++){
		const word = messageWords[i]

		if(urls.indexOf(word.toLowerCase().trim()) >= 0){
			messageSegments[segmentIndex] = messageSegments[segmentIndex].trim()
			segmentIndex++
			messageSegments[segmentIndex] = word
			if(i < messageWords.length-1){
				segmentIndex++
				messageSegments[segmentIndex] = ""
			}
		} else {
			messageSegments[segmentIndex] += word+" "
		}
	}

	return messageSegments
}

