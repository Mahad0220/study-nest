import { Controller, Get, HostParam } from '@nestjs/common';

// @Controller({ host: 'api.localhost' })
// export class ApiController {
//   @Get() // 같은 루트 경로
//   index(): string {
//     return 'Hello, API'; // 다른 응답
//   }
// }
/**
 * @deprecated
 */
@Controller({ host: ':version.api.localhost' })
export class ApiController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `Hello, API ${version}`;
  }
}
