import { Router } from 'express';

import { IssueController } from './modules/useCases/issues/IssueController';

const issueController = new IssueController();

const routes = Router();

routes.get('/issue', issueController.getAll);
routes.post('/issue', issueController.create);
routes.delete('/issue/:id', issueController.delete);
routes.put('/issue', issueController.update);

export default routes;
