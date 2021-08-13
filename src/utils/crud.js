export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model
      .findOne({
        createdBy: req.user._id,
        _id: req.params.id,
      })
      .lean()
      .exec();

    if (!doc) res.status(404).end();

    res.status(200).json({ data: doc });
  } catch (err) {
    res.status(404).end();
    console.log(err);
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model
      .find({
        createdBy: req.user._id,
      })
      .lean()
      .exec();

    if (!doc) res.status(404).end();

    res.status(201).json({ data: docs });
  } catch (error) {
    res.status(404).end();
    console.log(error);
  }
};

export const createOne = (model) => async (req, res) => {
  try {
    const createdBy = req.user._id;
    const doc = await model
      .create({
        ...req.body,
        createdBy,
      })
      .lean()
      .exec();
    res.status(201).json({ data: doc });
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const doc = await model
      .findOneAndUpdate(
        {
          createdBy: req.user._id,
          _id: req.params.id,
        },
        { new: true }
      )
      .lean()
      .exec();

    if (!doc) res.status(404).end();

    res.status(200).json({ data: doc });
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const removeOne = (model) => async (req, res) => {
  try {
    const doc = await model
      .findOneAndRemove({
        createdBy: req.user._id,
        _id: req.params.id,
      })
      .lean()
      .exec();

    if (!doc) res.status(404).end();

    res.status(200).json({ data: doc });
  } catch (error) {
    console.log(error);
    res.status(404).end();
  }
};

export const crudControllers = (model) => ({
  getOne: getOne(model),
  removeOne: removeOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
});
