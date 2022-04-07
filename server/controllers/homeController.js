const homepage = (req, res) => {
	res.render("home/homepage", { title: "homepage" });
};

module.exports = {
	homepage,
};
