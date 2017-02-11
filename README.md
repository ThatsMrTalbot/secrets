# Typescript secret manager

Simple library to abstract obtaining secrets. 

Currently supports:
- Docker secrets (1.13)
- File based secrets
- Envrionment vars

## Usage:

You can get values as a buffer:

```typescript
secrets.use(new EnvironmentProvider());
secrets.get("private_key").then((value : Buffer) => {
    // Do something with the private key
});
```

Or as a string:

```typescript
secrets.use(new EnvironmentProvider());
secrets.get("private_key", 'utf8').then((value : string) => {
    // Do something with the private key
});
```

## Providers
### Environment
```typescript
import EnvironmentProvider from "@thatsmrtalbot/secrets/lib/environment"

secrets.use(new EnvironmentProvider());
```
### Docker
```typescript
import DockerProvider from "@thatsmrtalbot/secrets/lib/docker"

secrets.use(new DockerProvider());
```
### File
```typescript
import FileProvider from "@thatsmrtalbot/secrets/lib/file"

secrets.use(new FileProvider("/some/dir"));
```