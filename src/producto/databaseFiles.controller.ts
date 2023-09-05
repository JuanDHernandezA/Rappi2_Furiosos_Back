import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  StreamableFile,
  Res,
  ParseIntPipe,
  Post,
  UploadedFile,
} from '@nestjs/common';
import DatabaseFilesService from './databaseFiles.service';
import { Readable } from 'stream';
import { Response } from 'express';
import DatabaseFile from './databaseFile.entity';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('database-files')
@UseInterceptors(ClassSerializerInterceptor)
export default class DatabaseFilesController {
  constructor(private readonly databaseFilesService: DatabaseFilesService) {}

  @Get(':id')
  async getDatabaseFileById(
    @Param('id', ParseIntPipe) id: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    const file = await this.databaseFilesService.getFileById(id);

    const stream = Readable.from(file.data);

    response.set({
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Content-Type': 'image',
    });

    return new StreamableFile(stream);
  }

  @Post('foto')
  @UseInterceptors(FileInterceptor('file'))
  async newFoto(@UploadedFile() file: Express.Multer.File): Promise<number> {
    return await this.databaseFilesService.uploadDatabaseFile(
      file.buffer,
      file.originalname,
    );
  }
}
