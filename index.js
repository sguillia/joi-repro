let Joi = require("@hapi/joi")

reachSchema = Joi.object().keys({
	reach: Joi.string(),
	reachCond: Joi.alternatives().conditional("reach", {
		is: "foo",
		then: Joi.array()
	}),
})

// OK
const usingReach1 = Joi.object().keys({
	reach_xxx: reachSchema.required(),
})

// Error: Item cannot come after itself: reach
const usingReach = Joi.object().keys({
	reach: reachSchema.required(),
})
