import { Request, Response } from "express";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationsController {
  constructor(
    private createSpecificationsUseCose: CreateSpecificationsUseCase
  ) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createSpecificationsUseCose.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateSpecificationsController };
