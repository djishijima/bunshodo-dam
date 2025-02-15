#!/bin/bash

# Run database migrations
echo "Running database migrations..."
pnpm db:migrate

# Build the application
echo "Building the application..."
pnpm build
