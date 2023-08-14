import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.enum';
import { User } from './entities/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRole) {
      return true;
    }
    const user: User = {
      name: 'John Doe',
      roles: [Role.USER],
    };
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    return requiredRole.some((role) => user.roles?.includes(role));
    return false;
  }
}
