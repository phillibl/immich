import { ApiProperty } from '@nestjs/swagger';
import { ValidateUUID } from '../../../../../apps/immich/src/decorators/validate-uuid.decorator';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  albumName!: string;

  @ValidateUUID({ optional: true, each: true })
  sharedWithUserIds?: string[];

  @ValidateUUID({ optional: true, each: true })
  assetIds?: string[];
}
