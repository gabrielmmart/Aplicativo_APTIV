import express from 'express'
import { AppModel } from '../models/appModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.imgSrc ||
      !request.body.nomeApp ||
      !request.body.link
    ) {
      return response.status(400).send({
        message: 'Send all required fields: imgSrc, nomeApp, link',
      });
    }
    const newApp = {
      imgSrc: request.body.imgSrc,
      nomeApp: request.body.nomeApp,
      link: request.body.link,
    };

    const apps = await AppModel.create(newApp);

    return response.status(201).send(apps);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
      const apps = await AppModel.find({});
      
      return response.status(200).json({
          count: apps.length,
          data: apps
      })
  } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message});
  }
});

router.get('/:id', async (request, response) => {
  try {

      const { id } = request.params;

      const appEx = await AppModel.findById(id);
      
      return response.status(200).json(appEx)
      
  } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message});
  }
});

router.put('/:id', async (request, response) => {
try {
  if (
    !request.body.imgSrc ||
    !request.body.nomeApp ||
    !request.body.link
  ) {
    return response.status(400).send({
      message: 'Send all required fields: imgSrc, nomeApp, link',
    });
  }

  const { id } = request.params;

  const result = await AppModel.findByIdAndUpdate(id, request.body);

  if (!result) {
    return response.status(404).json({ message: 'App not found' });
  }

  return response.status(200).send({ message: 'App updated successfully' });

} catch (error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
})

router.delete('/:id', async (request, response) => {
try {
  const { id } = request.params;

  const result = await AppModel.findByIdAndDelete(id);

  if (!result) {
    return response.status(404).json({ message: 'App not found' });
  }

  return response.status(200).send({ message: 'App deleted successfully' });
} catch (error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
});

export default router;