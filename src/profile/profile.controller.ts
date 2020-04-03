import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Profile } from '../entity/Profile';
import { ProfileService } from './profile.service';

@Crud({
  model: {
    type: Profile
  }
})
@Controller('profile')
export class ProfileController {
  constructor(
    public profileService: ProfileService
  ) {}
}
