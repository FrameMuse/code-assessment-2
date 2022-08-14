import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common"

import { CreateInput } from "./dtos/create.dto"
import StatisticsFiltersDto from "./dtos/filters.dto"
import StatisticsEntity from "./entities/statistics.entity"
import { StatisticsService } from "./statistics.service"

@Controller("statistics")
export class StatisticsController {
  constructor(private statisticsService: StatisticsService) {}

  @Get()
  async get(@Query() filters: StatisticsFiltersDto): Promise<StatisticsEntity[]> {
    return await this.statisticsService.findAll(filters)
  }

  @Post()
  create(@Body() createInput: CreateInput) {
    return this.statisticsService.create(createInput)
  }

  @Delete()
  delete() {
    return this.statisticsService.clear()
  }
}