function toCmd(arr) {
	var out = "ffmpeg ";
	for (let i = 0; i < arr.length; i++) {
		out += "-i " + arr[i] + " ";
	}
	out += "-filter_complex \"";
	for (let i = 0; i < arr.length; i++) {
		var time = arr[i].split("\\")[3].split("_")[0] + " " + arr[i].split("\\")[3].split("_")[1].replace(/.flv/gm, "");
		out += "[" + i + ":v]scale=1280:-1,drawtext=fontfile=\"unifont-11.0.03.ttf\":text=\\" + time + "\\:fontcolor=white:fontsize=24:x=(w-tw)/2:y=50:enable='between(t,0,5):box=1:boxcolor=00000080'[vi" + i + "],";
	}
	for (let i = 0; i < arr.length; i++) {
		out += "[vi" + i + "][" + i + ":a] ";
	}
	out += "concat=n=" + arr.length + ":v=1:a=1 [out]\" -map [out] -vcodec h264 -acodec aac output.mkv"
	return out;
}
